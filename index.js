        let numbers = {1:0, 2:0, 3:0, 4:0};
        let totalNumbers = 36;

        document.getElementById('sahoo').addEventListener('click', function() {
            if (totalNumbers > 0) {
                let random;

                do {
                    random = Math.floor(Math.random() * 4) + 1;
                } while (numbers[random] >= 9);

                numbers[random]++;
                totalNumbers--;

                document.getElementById('randomNumber').value = random;
                document.getElementById('remaining').textContent = 'Members: ' + totalNumbers;
            } else {
                alert('All numbers have been generated 9 times.');
            }
        });