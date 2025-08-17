export function ThemeScript() {
  const code = `(function(){
    try{
      var KEY='lumora:theme';
      var saved = localStorage.getItem(KEY);
      var el = document.documentElement;
      if (saved) { el.setAttribute('data-theme', saved); return; }
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      el.setAttribute('data-theme', prefersDark ? 'dark-1' : 'light-1');
    }catch(e){}
  })();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
