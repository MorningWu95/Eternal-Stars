function checkMobile() {
            const isMobile = window.matchMedia("(max-width: 480px)").matches;
            const bgVideo = document.getElementById('bg-video');
            const desktopVideo = document.getElementById('desktop-video');
            const mobileVideo = document.getElementById('mobile-video');

            if (isMobile) {
                desktopVideo.style.display = 'none';
                mobileVideo.style.display = 'inline';
                bgVideo.src = mobileVideo.src;
            } else {
                mobileVideo.style.display = 'none';
                desktopVideo.style.display = 'inline';
                bgVideo.src = desktopVideo.src;
            }
            bgVideo.load();
        }

        // 页面加载时检查
        window.addEventListener('load', checkMobile);
        // 窗口大小变化时检查
        window.addEventListener('resize', checkMobile);