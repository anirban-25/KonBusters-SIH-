import Link from "next/link";
import "../app/App.css";
function TextBlock() {
  return (
    <div>
      <div id="textblock">
        <div className="x-5"></div>
        <div className="mx-5 min-w-screen flex justify-between">
          <Link href="/mainpage">
            <button className="w-52 text-xl font-bold bg-yellow-200/30 rounded-xl px-4 py-2 hover:bg-yellow-300/30 transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
              SIGN UP(user)
            </button>
          </Link>
          <Link href="/mainpage_org">
            <button className="w-52 text-xl font-bold bg-yellow-200/30 rounded-xl px-4 py-2 hover:bg-yellow-300/30 transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
              SIGN UP(org)
            </button>
          </Link>
        </div>
        
        <footer id="textblock-footer">
          Created with 🧡 by team KonBusters
        </footer>
      </div>
    </div>
  );
}

export default TextBlock;
