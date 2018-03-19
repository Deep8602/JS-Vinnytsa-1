/*не был на Hash Code, по этому задание не особо понял
но работу с файлами попрактиковал*/

var fs = require('fs');
var fname = 'a_example.in';
var file1 = 'newfile2.txt';

var readFile = function (err, contents) {
    var lines = contents.toString().split('\n');//переводим считаные из файла данные в строку
    var firstData = lines[0].split(' ');// выводим первую строку в масив символов и удаляем пробелы
    var cars = firstData[2];// присваем переменным значения из первой строки файла в соостветствии с примером
    var rides = firstData[3];
    var bonus = firstData[4];
    var steps = firstData[5];
    console.log('cars', cars);
    console.log('rides', rides);
    console.log('bonus', bonus);
    console.log('steps', steps);
    console.log(contents.toString());
//так как переменные находятся в зоне видимости функции печать в файл провожу тут же.
    var text = ['cars:', cars, 'rides:', rides, 'bonus:', bonus, 'steps:', steps];// печать обьекта в файл не удалась, даже при помощи toString(),вывел масив.
          fs.open(file1, "w", 0644, function(err, file_handle) {
        if (!err) {
                    fs.write(file_handle, text, null, 'ascii', function(err, written) {
                if (!err) {
                    // Всё прошло хорошо
                } else {
                    // Произошла ошибка при записи
                }
            });
        } else {
            // Обработка ошибок при открытии
        }
        });
};
fs.readFile(fname, readFile);

