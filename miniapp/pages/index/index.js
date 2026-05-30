const dynasties = [
  { id:'ancient',name:'上古时期',period:'史前 — 约前2070年',startYear:-3000,endYear:-2070,
    description:'此时期是人类社会发展的初级阶段，也是中华文明的孕育期。北京猿人、蓝田人等古人类的发现，展示了中国早期人类的智慧与生存状态。随着石器工具的进步和火的使用，人类社会逐渐进入新石器时代，农业、畜牧业开始兴起，定居生活成为可能。',
    majorEvents:['北京猿人生活（约70万年前）','仰韶文化兴起（约前5000年）','大汶口文化发展（约前4300年）','三皇五帝传说时期'],
    famousFigures:['黄帝','炎帝','尧','舜','禹'],
    inventions:['石器工具','火的使用','彩陶制作','农业种植'],
    turningPoints:[{year:'约前5000年',event:'仰韶文化兴起',description:'以彩陶为特色的新石器时代文化',significance:'标志着中国进入定居农业社会'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/256d90d2-c525-4280-b7b0-828b93cdb6f8.jpg',color:'#8B7355',progress:5
  },
  { id:'xia',name:'夏朝',period:'约前2070年 — 约前1600年',startYear:-2070,endYear:-1600,
    description:'夏朝是中国历史上第一个世袭制王朝，标志着中国由原始社会向奴隶制社会的过渡。大禹治水成功后建立夏朝，开创了"家天下"的政治格局。夏朝虽然文献记载较少，但考古发现的二里头文化被认为与夏朝有关。',
    majorEvents:['大禹治水建立夏朝（约前2070年）','启继承王位，开创世袭制','太康失国','少康中兴','桀暴政，夏朝灭亡（约前1600年）'],
    famousFigures:['大禹','启','太康','少康','桀'],
    inventions:['世袭制度','历法雏形','青铜器初现','城市规划'],
    turningPoints:[{year:'约前2070年',event:'夏朝建立',description:'大禹治水成功，建立中国第一个王朝',significance:'标志着中国进入王朝时代，原始社会结束'},{year:'约前1600年',event:'夏朝灭亡',description:'商汤灭夏桀，夏朝覆灭',significance:'暴政导致王朝更替，开启商朝时代'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/93877b7d-3c74-4ad0-9a6a-62a4516a666b.jpg',color:'#8B7355',progress:3
  },
  { id:'shang',name:'商朝',period:'约前1600年 — 约前1046年',startYear:-1600,endYear:-1046,
    description:'商朝是中国历史上第二个王朝，以青铜器文明和甲骨文闻名于世。商朝的青铜冶炼技术达到了很高的水平，甲骨文的出现标志着中国文字的成熟。商朝实行神权政治，占卜活动频繁，为后世留下了大量珍贵的甲骨文资料。',
    majorEvents:['商汤灭夏建立商朝（约前1600年）','盘庚迁殷（约前1300年）','武丁中兴','帝辛（纣王）暴政','牧野之战，商朝灭亡（约前1046年）'],
    famousFigures:['商汤','伊尹','盘庚','武丁','妇好','纣王','比干'],
    inventions:['甲骨文','青铜器','历法','占卜术'],
    turningPoints:[{year:'约前1300年',event:'盘庚迁殷',description:'商王盘庚将都城迁至殷（今河南安阳）',significance:'商朝进入稳定发展期，殷墟成为重要考古遗址'},{year:'约前1046年',event:'商朝灭亡',description:'周武王伐纣，牧野之战商朝覆灭',significance:'青铜文明达到顶峰后衰落，周朝建立'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/d91e5372-7269-4ee0-9f64-5d4c58cd3b0e.jpg',color:'#A0826D',progress:3
  },
  { id:'zhou',name:'西周',period:'约前1046年 — 前771年',startYear:-1046,endYear:-771,
    description:'西周建立了完善的分封制和宗法制度，形成了"天子—诸侯—卿大夫—士"的等级体系。周公制礼作乐，确立了礼乐文化的基础。西周时期农业、手工业都有很大发展，青铜器铭文成为重要的历史资料。',
    majorEvents:['武王伐纣建立周朝（约前1046年）','周公东征平定叛乱','周公制礼作乐','成康之治','国人暴动（前841年）','烽火戏诸侯，西周灭亡（前771年）'],
    famousFigures:['周武王','周公旦','姜子牙','周成王','周康王','周幽王'],
    inventions:['分封制','宗法制','礼乐制度','井田制'],
    turningPoints:[{year:'约前1046年',event:'西周建立',description:'周武王伐纣成功，建立周朝',significance:'分封制和宗法制确立，礼乐文化形成'},{year:'前771年',event:'西周灭亡',description:'犬戎攻破镐京，周幽王被杀',significance:'西周结束，东周开始，进入春秋时期'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/a0f5a1de-0315-4d68-ba22-3f7f45566a5e.jpg',color:'#B8956A',progress:2
  },
  { id:'spring-autumn',name:'春秋时期',period:'前770年 — 前476年',startYear:-770,endYear:-476,
    description:'春秋时期是东周的前半期，周王室权威衰落，诸侯争霸成为主旋律。齐桓公、晋文公、楚庄王、吴王阖闾、越王勾践先后称霸。这一时期，铁器开始使用，生产力提高，社会经济发展，思想文化空前活跃。',
    majorEvents:['平王东迁（前770年）','齐桓公称霸（前685—前643年）','晋文公称霸（前636—前628年）','楚庄王问鼎中原（前613—前591年）','吴越争霸','孔子周游列国'],
    famousFigures:['齐桓公','管仲','晋文公','楚庄王','孔子','老子','孙武'],
    inventions:['铁器','牛耕','私学兴起','诸子百家思想'],
    turningPoints:[{year:'前770年',event:'平王东迁',description:'周平王迁都洛邑，东周开始',significance:'周王室权威衰落，诸侯争霸时代来临'},{year:'前551年',event:'孔子诞生',description:'儒家学派创始人孔子出生',significance:'儒家思想诞生，影响中国两千多年'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/add434a8-5872-4f40-997e-6588003e36f0.jpg',color:'#C9A86A',progress:2
  },
  { id:'warring-states',name:'战国时期',period:'前475年 — 前221年',startYear:-475,endYear:-221,
    description:'战国时期是中国历史上最为动荡的时期之一，七雄并立，战争频繁。各国纷纷变法图强，商鞅变法使秦国强大。这一时期，铁器广泛使用，农业生产力大幅提高，诸子百家思想达到鼎盛，为中华文化奠定了基础。',
    majorEvents:['三家分晋（前403年）','商鞅变法（前356年）','长平之战（前260年）','荆轲刺秦王（前227年）','秦灭六国统一天下（前230—前221年）'],
    famousFigures:['商鞅','孟子','庄子','荀子','韩非子','墨子','白起','廉颇','赵括'],
    inventions:['都江堰','郡县制雏形','兵法著作','诸子百家学说'],
    turningPoints:[{year:'前356年',event:'商鞅变法',description:'秦国实行商鞅变法，国力大增',significance:'秦国崛起，为统一六国奠定基础'},{year:'前260年',event:'长平之战',description:'秦国大败赵国，坑杀赵军40万',significance:'东方六国再无力抗衡秦国'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/4dbb9f1b-a9d6-4a7d-8415-3467d4ddbedf.jpg',color:'#D4AF6A',progress:2
  },
  { id:'qin',name:'秦朝',period:'前221年 — 前207年',startYear:-221,endYear:-207,
    description:'秦朝是中国历史上第一个统一的中央集权制封建王朝。秦始皇统一六国后，实行郡县制，统一文字、货币、度量衡，修建长城和驰道，建立了强大的中央集权体系。虽然秦朝仅存在15年，但其制度影响深远。',
    majorEvents:['秦始皇统一六国（前221年）','统一文字、货币、度量衡','修建长城','焚书坑儒（前213年）','秦始皇巡游病逝（前210年）','陈胜吴广起义（前209年）','刘邦项羽灭秦（前207年）'],
    famousFigures:['秦始皇','李斯','蒙恬','赵高','陈胜','吴广'],
    inventions:['郡县制','统一文字（小篆）','统一货币（半两钱）','统一度量衡'],
    turningPoints:[{year:'前221年',event:'秦朝建立',description:'秦始皇统一六国，建立中国第一个统一王朝',significance:'结束分裂，建立中央集权制度，影响后世两千年'},{year:'前207年',event:'秦朝灭亡',description:'刘邦项羽攻入咸阳，秦朝覆灭',significance:'暴政导致速亡，楚汉相争开始'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/d6e7d003-3f95-4a27-92b4-1f7d1a8a5e4d.jpg',color:'#8B7355',progress:1
  },
  { id:'han',name:'汉朝',period:'前202年 — 公元220年',startYear:-202,endYear:220,
    description:'汉朝分为西汉和东汉两个时期，是中国历史上最强盛的王朝之一。汉武帝时期，国力达到鼎盛，开辟丝绸之路，独尊儒术。汉朝在政治、经济、文化、科技等方面都取得了辉煌成就，"汉族""汉字"等称谓由此而来。',
    majorEvents:['刘邦建立汉朝（前202年）','文景之治（前180—前141年）','汉武帝独尊儒术（前134年）','张骞出使西域（前138年）','王莽篡汉（公元8年）','光武中兴（公元25年）','黄巾起义（公元184年）','汉朝灭亡（公元220年）'],
    famousFigures:['刘邦','汉武帝','张骞','司马迁','董仲舒','王莽','光武帝','班固','蔡伦'],
    inventions:['造纸术','地动仪','浑天仪','丝绸之路'],
    turningPoints:[{year:'前202年',event:'汉朝建立',description:'刘邦战胜项羽，建立汉朝',significance:'开创汉族文化，奠定中华文明基础'},{year:'前134年',event:'独尊儒术',description:'汉武帝采纳董仲舒建议，罢黜百家独尊儒术',significance:'儒家思想成为正统，影响中国两千年'},{year:'公元105年',event:'蔡伦改进造纸术',description:'蔡伦改进造纸技术，纸张开始普及',significance:'促进文化传播，影响世界文明'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/5969a7e2-0c4f-4c3e-b8e9-6e0e6e3e6a7f.jpg',color:'#A0826D',progress:3
  },
  { id:'three-kingdoms',name:'三国时期',period:'220年 — 280年',startYear:220,endYear:280,
    description:'三国时期是中国历史上的分裂时期，魏、蜀、吴三国鼎立。这一时期战争频繁，但也涌现出许多杰出的政治家、军事家和文学家。三国时期的历史被后世演绎成《三国演义》，成为中国文学瑰宝。',
    majorEvents:['曹丕称帝建立魏国（220年）','刘备称帝建立蜀汉（221年）','孙权称帝建立吴国（229年）','诸葛亮六出祁山','司马懿发动高平陵之变（249年）','司马炎建立晋朝，三国归晋（280年）'],
    famousFigures:['曹操','刘备','孙权','诸葛亮','关羽','张飞','赵云','周瑜','司马懿'],
    inventions:['木牛流马','连弩','屯田制','《出师表》'],
    turningPoints:[{year:'208年',event:'赤壁之战',description:'孙刘联军大败曹操，奠定三国鼎立格局',significance:'三国鼎立局面形成'},{year:'280年',event:'三国归晋',description:'晋武帝司马炎灭吴，统一全国',significance:'结束六十年分裂，中国重归统一'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/6393b4d4-b4b7-4f9c-9e0e-7b3b3e7e9f2c.jpg',color:'#B8956A',progress:1
  },
  { id:'jin',name:'两晋时期',period:'265年 — 420年',startYear:265,endYear:420,
    description:'两晋分为西晋和东晋。西晋短暂统一后，因八王之乱和永嘉之乱而灭亡。东晋偏安江南，北方陷入五胡十六国的混乱。这一时期，士族门阀势力强大，玄学盛行，书法艺术达到高峰。',
    majorEvents:['司马炎建立西晋（265年）','八王之乱（291—306年）','永嘉之乱（311年）','司马睿建立东晋（317年）','淝水之战（383年）','刘裕灭东晋（420年）'],
    famousFigures:['司马炎','司马睿','王羲之','陶渊明','谢安','刘裕'],
    inventions:['行书、草书发展','玄学思想','山水诗','田园诗'],
    turningPoints:[{year:'316年',event:'西晋灭亡',description:'匈奴攻陷长安，西晋覆灭',significance:'北方陷入五胡十六国混乱，汉族南迁'},{year:'383年',event:'淝水之战',description:'东晋以少胜多击败前秦',significance:'保住了江南汉族政权，延续了中华文明'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/3798c5d5-c5c8-4a0d-8f1f-8c4c4f8f9a3d.jpg',color:'#C9A86A',progress:1
  },
  { id:'northern-southern',name:'南北朝时期',period:'420年 — 589年',startYear:420,endYear:589,
    description:'南北朝时期，南方经历了宋、齐、梁、陈四个朝代，北方则先后有北魏、东魏、西魏、北齐、北周。这一时期，佛教盛行，石窟艺术发达，民族融合加速。北魏孝文帝改革促进了民族融合。',
    majorEvents:['刘裕建立宋朝（420年）','北魏统一北方（439年）','北魏孝文帝改革（490年代）','梁武帝萧衍即位（502年）','侯景之乱（548年）','隋文帝统一全国（589年）'],
    famousFigures:['刘裕','北魏孝文帝','梁武帝','陈霸先','祖冲之','郦道元'],
    inventions:['均田制','三长制','石窟艺术','《水经注》'],
    turningPoints:[{year:'490年代',event:'孝文帝改革',description:'北魏孝文帝推行汉化改革',significance:'促进民族融合，为隋唐统一奠定基础'},{year:'589年',event:'隋朝统一',description:'隋文帝灭陈，结束南北朝分裂',significance:'结束近四百年分裂，中国重归统一'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/2e2c0e6e-e6e7-4a1f-9f2f-9d5d5f0f6a2e.jpg',color:'#D4AF6A',progress:1
  },
  { id:'sui',name:'隋朝',period:'581年 — 618年',startYear:581,endYear:618,
    description:'隋朝虽然国祚短暂仅37年，但它结束了近三百年的分裂局面，重新统一了中国。隋文帝开创了科举制度，隋炀帝修建了贯通南北的大运河，对后世影响极为深远。',
    majorEvents:['杨坚建立隋朝（581年）','隋灭南陈统一全国（589年）','开创科举制度（587年）','开凿大运河（605—610年）','完善三省六部制','三征高句丽失败','隋炀帝在江都被杀（618年）'],
    famousFigures:['隋文帝杨坚','隋炀帝杨广','独孤皇后','宇文化及'],
    inventions:['科举制度','大运河','赵州桥','三省六部制'],
    turningPoints:[{year:'605年',event:'开创科举制',description:'隋炀帝设立进士科，以考试选拔人才',significance:'打破门阀垄断，影响中国一千三百年'},{year:'605—610年',event:'修建大运河',description:'以洛阳为中心，南起余杭北至涿郡',significance:'促进南北经济文化交流'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/3455d1f1-f1f2-4b2f-9a3f-0e6e6f7f5b3f.jpg',color:'#8B7355',progress:1
  },
  { id:'tang',name:'唐朝',period:'618年 — 907年',startYear:618,endYear:907,
    description:'唐朝是中国历史上最强盛的王朝之一，国力强盛、文化繁荣、对外开放，是当时世界上最强大的国家。贞观之治和开元盛世是中国封建社会的巅峰时期。唐诗、书法、绘画等艺术形式达到了极高的成就。',
    majorEvents:['李渊称帝建唐（618年）','玄武门之变（626年）','贞观之治（627—649年）','玄奘西行取经（629—645年）','武则天称帝（690年）','开元盛世（713—741年）','安史之乱（755—763年）','黄巢起义（875—884年）','朱温篡唐（907年）'],
    famousFigures:['李世民','武则天','李白','杜甫','白居易','玄奘','鉴真','狄仁杰','颜真卿','韩愈'],
    inventions:['雕版印刷术','火药','唐诗','飞钱（早期汇票）'],
    turningPoints:[{year:'627—649年',event:'贞观之治',description:'唐太宗李世民虚心纳谏，任用贤臣治理国家',significance:'政治清明，经济繁荣，文化昌盛'},{year:'755年',event:'安史之乱',description:'安禄山以讨伐杨国忠为名起兵叛乱',significance:'唐朝由盛转衰的转折点，藩镇割据开始'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/ac30e2f2-f2f3-4c3f-0a4f-1f7f7f6f4c0f.jpg',color:'#A0826D',progress:2
  },
  { id:'five-dynasties',name:'五代十国时期',period:'907年 — 960年',startYear:907,endYear:960,
    description:'五代十国是唐朝灭亡后中国再次陷入的分裂时期。北方中原先后经历了后梁、后唐、后晋、后汉、后周五个朝代，南方则有十个割据政权。后周世宗柴荣的改革为宋朝统一奠定了基础。',
    majorEvents:['朱温灭唐建立后梁（907年）','李存勖灭后梁建立后唐（923年）','石敬瑭割让燕云十六州（936年）','郭威建立后周（951年）','柴荣即位推行改革（954年）','赵匡胤陈桥兵变建立宋朝（960年）'],
    famousFigures:['朱温','李存勖','石敬瑭','郭威','柴荣（周世宗）','赵匡胤','李煜'],
    inventions:['火药武器实战应用','活字印刷技术萌芽','词的发展成熟'],
    turningPoints:[{year:'936年',event:'割让燕云十六州',description:'石敬瑭割让燕云十六州给契丹',significance:'中原王朝失去北方天然屏障'},{year:'960年',event:'宋朝建立',description:'赵匡胤陈桥兵变黄袍加身',significance:'结束五代十国分裂，中国再次走向统一'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/45b3e3f3-f3f4-4d4f-1b5f-2f8f8f7f5d1f.jpg',color:'#B8956A',progress:1
  },
  { id:'song',name:'宋朝',period:'960年 — 1279年',startYear:960,endYear:1279,
    description:'宋朝分为北宋和南宋两个阶段，是中国历史上经济、文化、科技最发达的朝代之一。北宋都城汴京是当时世界上最大的城市。宋朝经济极度繁荣，出现了世界上最早的纸币"交子"。指南针、火药、活字印刷术都在宋朝得到重大发展。',
    majorEvents:['赵匡胤建立宋朝（960年）','杯酒释兵权（961年）','王安石变法（1069年）','毕昇发明活字印刷术（约1040年）','靖康之变（1127年），北宋灭亡','岳飞郾城大捷（1140年）','岳飞冤狱（1141年）','文天祥抗元，南宋灭亡（1279年）'],
    famousFigures:['赵匡胤','王安石','苏轼','岳飞','文天祥','朱熹','沈括','辛弃疾','李清照'],
    inventions:['活字印刷术','指南针','火药武器','纸币（交子）','《梦溪笔谈》'],
    turningPoints:[{year:'1044年',event:'火药配方记载',description:'《武经总要》首次记载火药配方',significance:'火药开始用于军事，改变世界战争形态'},{year:'1127年',event:'靖康之变',description:'金兵攻破汴京，俘虏徽钦二帝',significance:'北宋灭亡，宋室南迁临安'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/b86ef4f4-f4f5-4e5f-2c6f-3f9f9f8f6e2f.jpg',color:'#C9A86A',progress:2
  },
  { id:'yuan',name:'元朝',period:'1271年 — 1368年',startYear:1271,endYear:1368,
    description:'元朝是由蒙古族建立的中国历史上疆域最辽阔的统一王朝，其版图横跨欧亚大陆。元朝定都大都（今北京），首次将西藏、云南等地正式纳入中国版图。元曲和杂剧是中国文学史上的璀璨明珠。',
    majorEvents:['铁木真统一蒙古，称成吉思汗（1206年）','忽必烈改国号为"大元"（1271年）','元军灭南宋统一全国（1279年）','马可·波罗来华（1275年）','行省制度确立','红巾军起义爆发（1351年）','朱元璋北伐攻克大都（1368年）'],
    famousFigures:['忽必烈','成吉思汗','郭守敬','关汉卿','马致远','马可·波罗'],
    inventions:['《授时历》','元曲','行省制度','回回炮'],
    turningPoints:[{year:'1279年',event:'元朝统一全国',description:'元军在崖山海战中击败南宋残部',significance:'中国首次由少数民族政权完成全国统一'},{year:'1368年',event:'元朝灭亡',description:'明军攻克大都，元顺帝北逃',significance:'蒙古势力退回草原，汉人重新建立统一王朝'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/7009f5f5-f5f6-4f6f-3d7f-4f0f0f9f7f3f.jpg',color:'#D4AF6A',progress:1
  },
  { id:'ming',name:'明朝',period:'1368年 — 1644年',startYear:1368,endYear:1644,
    description:'明朝是中国历史上最后一个由汉族建立的大一统王朝。明初国力强盛，郑和七下西洋展示了中国强大的海上实力。永乐年间编纂的《永乐大典》是当时世界上最大的百科全书。但明朝后期宦官专权、党争激烈，最终被农民起义推翻。',
    majorEvents:['朱元璋称帝建明（1368年）','靖难之役（1399—1402年）','永乐迁都北京（1421年）','郑和七下西洋（1405—1433年）','土木堡之变（1449年）','张居正改革（1572—1582年）','戚继光抗倭','李自成攻破北京（1644年）'],
    famousFigures:['朱元璋','朱棣','郑和','王阳明','张居正','戚继光','李时珍','海瑞','徐光启'],
    inventions:['《永乐大典》','《本草纲目》','《天工开物》','紫禁城','青花瓷'],
    turningPoints:[{year:'1405—1433年',event:'郑和下西洋',description:'郑和率领庞大船队七次远航，访问三十多个国家',significance:'展示了明朝强大的海上实力'},{year:'1644年',event:'明朝灭亡',description:'李自成攻入北京，崇祯帝自缢殉国',significance:'最后一个汉族大一统王朝结束'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/fc23f6f6-f6f7-5f7f-4e8f-5f1f1f0f8f4f.jpg',color:'#8B7355',progress:2
  },
  { id:'qing',name:'清朝',period:'1636年 — 1912年',startYear:1636,endYear:1912,
    description:'清朝是中国历史上最后一个封建王朝，由满族建立。康雍乾三朝国力鼎盛，疆域超1300万平方公里，人口突破三亿。但中后期闭关锁国，与工业革命失之交臂，在西方列强侵略下逐渐沦为半殖民地半封建社会。1911年辛亥革命推翻帝制。',
    majorEvents:['努尔哈赤建立后金（1616年）','清军入关（1644年）','康熙擒鳌拜、平三藩、收台湾','康乾盛世（1661—1795年）','鸦片战争（1840年）','太平天国运动（1851—1864年）','洋务运动（1861—1894年）','甲午中日战争（1894年）','戊戌变法（1898年）','辛亥革命（1911年）'],
    famousFigures:['康熙','雍正','乾隆','林则徐','曾国藩','李鸿章','左宗棠','慈禧太后','孙中山','康有为'],
    inventions:['《四库全书》','《红楼梦》','京剧','圆明园','《康熙字典》'],
    turningPoints:[{year:'1840年',event:'鸦片战争',description:'英国发动侵华战争，清朝战败签订《南京条约》',significance:'中国开始沦为半殖民地半封建社会'},{year:'1911年',event:'辛亥革命',description:'武昌起义爆发，各省纷纷响应',significance:'结束延续两千余年的封建帝制'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/2e35f7f7-f7f8-6f8f-5f9f-6f2f2f1f9f5f.jpg',color:'#A0826D',progress:2
  },
  { id:'modern',name:'近现代时期',period:'1912年 — 至今',startYear:1912,endYear:2026,
    description:'辛亥革命推翻帝制后，中国经历了北洋政府、国民政府、抗日战争、解放战争等重大历史阶段。1949年中华人民共和国成立。1978年改革开放后，中国经济持续高速发展，已成为世界第二大经济体。今天的中国，正在实现中华民族伟大复兴的道路上坚定前行。',
    majorEvents:['中华民国成立（1912年）','五四运动（1919年）','中国共产党成立（1921年）','抗日战争全面爆发（1937年）','中华人民共和国成立（1949年）','抗美援朝（1950—1953年）','改革开放（1978年）','香港回归（1997年）','北京奥运会（2008年）','全面建成小康社会（2020年）'],
    famousFigures:['孙中山','毛泽东','周恩来','邓小平','鲁迅','钱学森','袁隆平','邓稼先'],
    inventions:['两弹一星','杂交水稻','高铁技术','5G通信','载人航天'],
    turningPoints:[{year:'1949年',event:'新中国成立',description:'毛泽东在天安门城楼宣告中华人民共和国成立',significance:'中国人民从此站起来了'},{year:'1978年',event:'改革开放',description:'中共十一届三中全会决定工作重心转向经济建设',significance:'中国开始了人类历史上规模最大的经济腾飞'}],
    backgroundImage:'https://miaoda-site-img.cdn.bcebos.com/images/677ff8f8-f8f9-7f9f-6f0f-7f3f3f2f0f6f.jpg',color:'#B8956A',progress:1
  }
];

Page({
  data: {
    stats: [
      { num: '19', unit: '个', label: '历史时期' },
      { num: '5000+', unit: '年', label: '历史跨度' },
      { num: '300+', unit: '件', label: '重大事件' },
      { num: '160+', unit: '位', label: '著名人物' }
    ],
    dynasties: [],
    showModal: false,
    detail: null
  },

  onLoad() {
    // Compute years display for each dynasty
    const processed = dynasties.map(d => {
      const span = Math.abs(d.endYear - d.startYear);
      const years = span >= 100 ? Math.round(span / 100) * 100 + '余年' : span + '年';
      return { ...d, years };
    });
    this.setData({ dynasties: processed });
  },

  scrollToTimeline() {
    wx.pageScrollTo({ selector: '#timeline', duration: 300 });
  },

  openDetail(e) {
    const idx = e.currentTarget.dataset.index;
    const detail = this.data.dynasties[idx];
    if (detail) this.setData({ showModal: true, detail });
  },

  closeModal() {
    this.setData({ showModal: false, detail: null });
  },

  noop() {}
});
