#!/usr/bin/env python3
"""Add inventor and inventorPeriod fields to inventions across all data files."""
import re, os

v3dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(v3dir)

# Mapping: invention_name -> (inventor, inventorPeriod)
# Only inventions with clear individual creators; anonymous/collective ones skipped
INVENTOR_MAP = {
    # === data-1.js: 上古/夏/商/西周/春秋 ===
    '分封制': ('周公旦', '西周初年（约前1046年）'),
    '宗法制': ('周公旦', '西周初年（约前1046年）'),
    '礼乐制度': ('周公旦', '西周初年（约前1046年）'),
    '私学兴起': ('孔子', '春秋晚期（约前500年）'),

    # === data-2.js: 战国/秦/汉 ===
    '都江堰水利工程': ('李冰', '秦昭襄王五十一年（前256年）'),
    '郡县制雏形': ('商鞅', '秦孝公时期（前356—前338年）'),
    '兵法著作': ('孙武', '春秋末期（约前512年）'),
    '郡县制': ('秦始皇、李斯', '秦始皇二十六年（前221年）'),
    '统一文字（小篆）': ('李斯', '秦始皇二十六年（前221年）'),
    '统一货币（半两钱）': ('秦始皇', '秦始皇二十六年（前221年）'),
    '统一度量衡': ('秦始皇', '秦始皇二十六年（前221年）'),
    '造纸术': ('蔡伦', '东汉元兴元年（105年）'),
    '地动仪': ('张衡', '东汉阳嘉元年（132年）'),
    '浑天仪': ('张衡', '东汉元初四年（117年）'),
    '《史记》': ('司马迁', '汉武帝太初年间（前104—前91年）'),
    '丝绸之路': ('张骞', '汉武帝建元三年至元朔三年（前138—前126年）'),
    '《汉书》': ('班固', '东汉建初年间（约76—82年）'),

    # === data-3.js: 三国/两晋/南北朝/隋 ===
    '木牛流马': ('诸葛亮', '蜀汉建兴九年至十二年（231—234年）'),
    '连弩': ('诸葛亮', '蜀汉建兴年间（约225—234年）'),
    '屯田制': ('曹操', '东汉建安元年（196年）'),
    '《出师表》': ('诸葛亮', '蜀汉建兴五年（227年）'),
    '行书与草书': ('王羲之', '东晋永和年间（约353年）'),
    '山水诗': ('谢灵运', '南朝宋元嘉年间（约424—433年）'),
    '田园诗': ('陶渊明', '东晋义熙年间（约405—427年）'),
    '玄学思想': ('王弼、何晏', '曹魏正始年间（240—249年）'),
    '均田制': ('北魏孝文帝、冯太后', '北魏太和九年（485年）'),
    '三长制': ('北魏孝文帝', '北魏太和十年（486年）'),
    '《水经注》': ('郦道元', '北魏延昌年间（约515—524年）'),
    '《齐民要术》': ('贾思勰', '东魏天平年间（约533—544年）'),
    '科举制度': ('隋文帝、隋炀帝', '隋大业年间（605—618年）'),
    '大运河': ('隋炀帝', '隋大业元年至六年（605—610年）'),
    '赵州桥': ('李春', '隋大业年间（约605—617年）'),
    '三省六部制': ('隋文帝', '隋开皇元年（581年）'),

    # === data-4.js: 唐/五代/宋 ===
    '雕版印刷术': ('佚名刻工', '唐代（约7—9世纪），最早纪年实物为敦煌《金刚经》（868年）'),
    '火药': ('古代炼丹家', '唐代（约8—9世纪），最早记载见于《真元妙道要略》'),
    '飞钱（早期汇票）': ('唐代商人', '唐宪宗元和年间（806—820年）'),
    '火药武器开始实战应用': ('唐末将领', '唐天祐元年（904年）'),
    '活字印刷技术萌芽': ('五代刻工', '五代时期（907—960年）'),
    '活字印刷术': ('毕昇', '北宋庆历年间（1041—1048年）'),
    '指南针': ('佚名方士', '战国已有司南，北宋应用于航海，沈括《梦溪笔谈》最早记载磁偏角'),
    '火药武器': ('宋代工匠', '北宋至南宋（10—13世纪），最早的火枪、突火枪、震天雷等'),
    '纸币（交子）': ('张咏', '北宋天圣元年（1023年），益州交子务正式发行官交子'),
    '《梦溪笔谈》': ('沈括', '北宋元祐年间（约1086—1093年）'),

    # === data-5.js: 元/明 ===
    '《授时历》（精确到365.2425天）': ('郭守敬', '元至元十七年（1280年）'),
    '元曲': ('关汉卿等', '元至元—至正年间（约1260—1368年）'),
    '行省制度': ('忽必烈', '元至元年间（约1271—1294年）'),
    '回回炮': ('亦思马因', '元至元八年（1271年）'),
    '《永乐大典》': ('解缙（总纂）', '明永乐元年至六年（1403—1408年）'),
    '《本草纲目》': ('李时珍', '明嘉靖三十一年至万历六年（1552—1578年）'),
    '《天工开物》': ('宋应星', '明崇祯十年（1637年）'),
    '紫禁城': ('蒯祥（总设计）', '明永乐四年至十八年（1406—1420年）'),

    # === data-6.js: 清/近现代 ===
    '《四库全书》': ('纪昀（总纂官）', '清乾隆三十七年至四十七年（1772—1782年）'),
    '《红楼梦》': ('曹雪芹', '清乾隆年间（约1754—1763年）'),
    '京剧': ('程长庚等徽班艺人', '清乾隆五十五年至同治光绪年间（1790—1908年）'),
    '圆明园': ('康熙/雍正/乾隆', '清康熙四十六年至乾隆四十八年（1707—1783年），西洋楼由郎世宁、蒋友仁设计'),
    '《康熙字典》': ('张玉书、陈廷敬', '清康熙四十九年至五十五年（1710—1716年）'),
    '两弹一星': ('钱学森、邓稼先、于敏等', '1964年原子弹·1967年氢弹·1970年东方红卫星'),
    '杂交水稻': ('袁隆平', '1973年实现三系配套，1976年起大规模推广'),
    '高铁技术': ('集体创造', '2004年引进消化吸收，2017年复兴号首发'),
    '5G通信': ('集体创造（华为等）', '2019年6月正式商用'),
    '载人航天': ('集体创造', '2003年神舟五号·2022年空间站建成'),
}

# Apply to all data files
for fn in sorted(f for f in os.listdir('.') if f.startswith('data-') and f.endswith('.js')):
    with open(fn, 'r') as f:
        content = f.read()

    modified = False
    for name, (inventor, period) in INVENTOR_MAP.items():
        # Find this invention entry
        esc_name = re.escape(name)
        pattern = r"\{name:'" + esc_name + r"',"
        m = re.search(pattern, content)
        if not m:
            continue

        # Check it's an invention (has background, no desc)
        start = m.start()
        # Check if it already has inventor field
        snippet = content[start:start+100]
        if 'inventor:' in snippet:
            continue  # Already has inventor

        # Check it's in an inventions array, not events
        # Find the preceding 500 chars to check context
        ctx_start = max(0, start - 500)
        ctx = content[ctx_start:start]
        # Look for the nearest array marker
        # We'll check if this is an invention by looking for background field
        snippet2 = content[start:start+200]
        if "background:'" not in snippet2:
            continue  # Not an invention entry

        # Add inventor fields after name
        # Replace {name:'X', with {name:'X',inventor:'...',inventorPeriod:'...',
        old_prefix = f"{{name:'{name}',"
        # Escape single quotes in inventor/period
        inv_safe = inventor.replace("'", "'").replace("'", "'")
        per_safe = period.replace("'", "'").replace("'", "'")
        new_prefix = f"{{name:'{name}',inventor:'{inv_safe}',inventorPeriod:'{per_safe}',"

        if old_prefix in content:
            content = content.replace(old_prefix, new_prefix)
            modified = True
            print(f'  [{fn}] {name}: {inventor} — {period}')

    if modified:
        with open(fn, 'w') as f:
            f.write(content)

# Syntax check all files
print('\n=== Syntax check ===')
for fn in sorted(f for f in os.listdir('.') if f.startswith('data-') and f.endswith('.js')):
    import subprocess
    r = subprocess.run(['node', '--check', fn], capture_output=True, text=True)
    status = 'OK' if r.returncode == 0 else f'FAIL: {r.stderr[:100]}'
    print(f'  {fn}: {status}')

print('\nDone.')
