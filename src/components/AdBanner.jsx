import { useEffect, useRef } from 'react';

function AdBanner() {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // adsbygoogle not loaded
    }
  }, []);

  return (
    <div className="ad-banner">
      <ins className="adsbygoogle"
        ref={adRef}
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3229159425228525"
        data-ad-slot="3016170134"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

export default AdBanner;
