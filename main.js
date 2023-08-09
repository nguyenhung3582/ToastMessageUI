function toast({
    title = '',
    message = '',
    type = 'info',
    duration=3000
    }){
        const main = document.getElementById('toast');
        if(main){
            const toast = document.createElement('div');

            const icons = {
                success: 'fas fa-check-circle',
                info: 'fas fa-info-circle',
                warning: 'fas fa-exclamation-circle',
                error: 'fas fa-exclamation-circle',
            }
            const icon = icons[type];

            toast.classList.add('toast', `toast--${type}`);
            toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${duration}ms forwards`
            toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            `
            main.appendChild(toast)
            
            //Remove toast when close is clicked
            toast.onclick = function(e){
                if(e.target.closest('.toast__close')){
                    main.removeChild(toast);
                    clearTimeout(autoRemoveId) //stop auto remove toast
                };
            }
            //Auto remove toast
            const autoRemoveId = setTimeout(function (){
                main.removeChild(toast);
            }, duration + 1000) //cong them 1000ms cho animation fadeOut
        }
}
function showSuccessToast(){
    toast({
        title: 'Success!',
        message: 'Đây là nội dung thông báo Success của trang web',
        type: 'success',
        duration: 3000
    })
}
function showInfoToast(){
    toast({
        title: 'Info!',
        message: 'Đây là nội dung thông báo Info của trang web',
        type: 'info',
        duration: 3000
    })
}
function showWarningToast(){
    toast({
        title: 'Warning!',
        message: 'Đây là nội dung thông báo Warning của trang web',
        type: 'warning',
        duration: 8000
    })
}
function showErrorToast(){
    toast({
        title: 'Error!',
        message: 'Đây là nội dung thông báo Error của trang web',
        type: 'error',
        duration: 8000
    })
}