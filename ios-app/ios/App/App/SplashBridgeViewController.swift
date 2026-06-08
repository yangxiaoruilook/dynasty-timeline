import UIKit
import Capacitor

class SplashBridgeViewController: CAPBridgeViewController {
    private var launchCover: UIImageView?

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor(red: 234/255, green: 210/255, blue: 161/255, alpha: 1)
        addLaunchCover()
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        fadeLaunchCover()
    }

    private func addLaunchCover() {
        guard launchCover == nil, let image = UIImage(named: "Splash") else { return }

        let cover = UIImageView(image: image)
        cover.contentMode = .scaleAspectFill
        cover.backgroundColor = UIColor(red: 234/255, green: 210/255, blue: 161/255, alpha: 1)
        cover.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(cover)

        NSLayoutConstraint.activate([
            cover.topAnchor.constraint(equalTo: view.topAnchor),
            cover.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            cover.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            cover.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])

        launchCover = cover
    }

    private func fadeLaunchCover() {
        guard let cover = launchCover else { return }

        UIView.animate(
            withDuration: 1.25,
            delay: 2.35,
            options: [.curveEaseInOut, .allowUserInteraction],
            animations: {
                cover.alpha = 0
            },
            completion: { [weak self] _ in
                cover.removeFromSuperview()
                self?.launchCover = nil
            }
        )
    }
}
