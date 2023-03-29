import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div className="w-64 rounded-xl text-center shadow-xl outline outline-gray-500">
      <h3 className="py-2">繁田凌</h3>
      <p className="pt-2 text-left">〜自己紹介〜</p>
      <p className="p-4">
        25卒
        高校までサッカーをやっていて現在は観戦者。プログラミングに関しては、23年2月から勉強開始し、将来はフロントエンドエンジニアになろうと現在javascriptやreact,next.jsを中心に学習中。
      </p>
      <Link href="https://github.co.jp/">
        <GitHubIcon className="mb-6" />
      </Link>
      <Link href="https://instagram.com/ryoo7212?igshid=YmMyMTA2M2Y">
        <InstagramIcon className="mb-6" />
      </Link>
    </div>
  );
}
