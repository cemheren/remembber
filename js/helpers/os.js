function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'osx';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'ios';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'win';
    } else if (/Android/.test(userAgent)) {
      os = 'android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'linux';
    }
  
    return os;
  }