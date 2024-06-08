document.getElementById('generateBtn').addEventListener('click', function() {  
    var length = document.getElementById('length').value;  
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:\'",.<>/?\\';  
    var password = '';  
    for (var i = 0; i < length; i++) {  
        password += chars.charAt(Math.floor(Math.random() * chars.length));  
    }  
    document.getElementById('passwordDisplay').textContent = password;  
    // 显示长度  
    document.getElementById('lengthDisplay').textContent = length;  
});  
  
// 监听滑块变化并显示长度  
document.getElementById('length').addEventListener('input', function() {  
    document.getElementById('lengthDisplay').textContent = this.value;  
});
