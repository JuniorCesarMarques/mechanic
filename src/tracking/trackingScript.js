import { useEffect } from 'react';

const trackingScript = () => {
  useEffect(() => {
    const prefix = ["https://pay.kiwify.com.br"];

    function getParams() {
      let t = "";
      const e = window.top.location.href;
      const r = new URL(e);
      if (r) {
        const a = r.searchParams.get("utm_source");
        const n = r.searchParams.get("utm_medium");
        const o = r.searchParams.get("utm_campaign");
        const m = r.searchParams.get("utm_term");
        const c = r.searchParams.get("utm_content");
        if (e.indexOf("?") !== -1) {
          t = `&sck=${a}|${n}|${o}|${m}|${c}`;
        }
        console.log(t);
      }
      return t;
    }

    const updateLinks = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.toString()) {
        document.querySelectorAll("a").forEach((e) => {
          for (let r = 0; r < prefix.length; r++) {
            if (e.href.indexOf(prefix[r]) !== -1) {
              e.href = e.href.indexOf("?") === -1
                ? `${e.href}?${params.toString()}${getParams()}`
                : `${e.href}&${params.toString()}${getParams()}`;
            }
          }
        });
      }
    };

    updateLinks();

    console.log('%cScript de rastreamento de vendas desenvolvido pela Comunidade NOD - Dericson Calari e Samuel Choairy', 'font-size:20px;color:yellow;');

    // Cleanup function to remove any added event listeners or modifications if necessary
    return () => {
      // Code to clean up if needed
    };
  }, []); // Empty dependency array means this runs once when the component mounts

  return null;
};

export default trackingScript;
