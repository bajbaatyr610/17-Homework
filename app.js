// Определение любимых и нелюбимых цветов для разных людей


let TomsFavouriteColor = 'белый';
let person = 'Том';

function checkColorPreference(person, color) {
    if (person === 'Том') {
        if (color === 'белый' || color === 'черный' || color === 'красный') {
            return "Это любимый цвет Тома";
        } else if (color === 'розовый') {
            return "Это не любимый цвет Тома";
        } else {
            return "Это нейтральный цвет для Тома";
        }
    } else if (person === 'Кэт') {
        if (color === 'розовый' || color === 'белый') {
            return "Это любимый цвет Кэт";
        } else if (color === 'черный' || color === 'фиолетовый') {
            return "Это не любимый цвет Кэт";
        } else {
            return "Это нейтральный цвет для Кэт";
        }
    } else if (person === 'Сэм') {
        if (color === 'серый' || color === 'синий') {
            return "Это любимый цвет Сэма";
        } else if (color === 'оранжевый' || color === 'красный') {
            return "Это не любимый цвет Сэма";
        } else {
            return "Это нейтральный цвет для Сэма";
        }
    } else if (person === 'Лиза') {
        if (color === 'красный' || color === 'синий') {
            return "Это любимый цвет Лизы";
        } else if (color === 'зеленый' || color === 'черный') {
            return "Это не любимый цвет Лизы";
        } else {
            return "Это нейтральный цвет для Лизы";
        }
    } else if (person === 'Стив') {
        if (color === 'черный' || color === 'фиолетовый') {
            return "Это любимый цвет Стива";
        } else if (color === 'серый' || color === 'синий') {
            return "Это не любимый цвет Стива";
        } else {
            return "Это нейтральный цвет для Стива";
        }
    } else if (person === 'Джон') {
        if (color === 'желтый' || color === 'синий') {
            return "Это любимый цвет Джона";
        } else if (color === 'оранжевый') {
            return "Это не любимый цвет Джона";
        } else {
            return "Это нейтральный цвет для Джона";
        }
    } else {
        return "Информация о предпочтениях цвета недоступна для этого человека";
    }
}

// Пример использования
console.log(checkColorPreference(person, TomsFavouriteColor));