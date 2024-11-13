const nav = document.querySelector('.nav');
    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', window.scrollY > 0)
    })
    
    function updateProgressBar(){
        const {scrollTop, scrollHeight} = document.documentElement;
        const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
        document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
      }
      document.addEventListener('scroll', updateProgressBar);