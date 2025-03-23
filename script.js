document.getElementById('download-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const videoUrl = DocumentTimeline.getElementById('video-url').value:
    const resultDiv = document.getElementById('result');
    const downloadLink = document.getElementById('download-link');

    if (!videoUrl.includes('tiktok.com')) {
        alert('Vui lòng nhập liên kết Tiktok hợp lệ');
        return;
    }

    try {
        // Gọi API tải video (cần tích hợp API của bên thứ ba)
        const response = await fetch(`https://api.tikapi.io/tiktok?url=$(encodeURIComponent(videoUrl)}`);
        const data = await response.json();

        if (data.status === 'success') {
            downloadLink.href = data.video_url;
            downloadLink.textContent = 'Tải video tại đây';
            resultDiv.classList.remove('hidden');
        } else {
            alert('Không thể tải video. Vui lòng thử lại.');
        }
    } catch (error) {
        alert('Đã xảy ra lỗi. Vui lòng thử lại.');
        console.error(error);
    }
});