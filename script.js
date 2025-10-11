const input = document.getElementById('FormControl_Size');
        
input.addEventListener('input', function(e) {
    let value = this.value.replace(/[^0-9]/g, ''); 

    if (value.length === 3) {
        value += '×';
    }
    
    if (value.length > 7) {
        value = value.slice(0, 7);
    }
    
    this.value = value;
});