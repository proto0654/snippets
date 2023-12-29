function insertAtCursor(text) {
    var input = document.activeElement;
    if (input.selectionStart || input.selectionStart == '0') {
        var startPos = input.selectionStart;
        var endPos = input.selectionEnd;
        input.value = input.value.substring(0, startPos)
            + text
            + input.value.substring(endPos, input.value.length);
    } else {
        input.value += text;
    }
}

// Пример использования:
insertAtCursor('Вставляемый текст');
