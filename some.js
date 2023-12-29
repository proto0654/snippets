function insertAtCursor(text) {
    var input = document.activeElement;
    if (input.selectionStart || input.selectionStart == '0') {
        var startPos = input.selectionStart;
        var endPos = input.selectionEnd;
        input.value = input.value.substring(0, startPos)
            + text
            + input.value.substring(endPos, input.value.length);
        console.log('replace selection');
    } else {
        input.value += text;
        console.log('add to end');
    }
}

// Пример использования:
insertAtCursor('Вставляемый текст');
