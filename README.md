# JavaScript-Practice
Learning a JavaScript again and practicing it for an Interview.

## Project 01 solution: BMI Calculator 
```javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #212121;
            color: white;
            padding: 10px;
            font-family: Arial, sans-serif;
        }

        h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
            padding: 10px;
            border: solid white 2px;
        }

        fieldset {
            border: 1px solid white;
            padding: 20px;
            margin: 10px auto;
            max-width: 300px;
        }

        legend {
            padding: 0 10px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        label {
            display: block;
            margin-bottom: 5px;
        }

        input[type="text"], input[type="submit"] {
            width: 100%;
            padding: 5px;
        }

        #result {
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>✈️ Welcome to BMI Calculator 😊</h1>
    <div>
        <fieldset>    
            <legend>Enter details</legend>    
            <form>
                <div>
                    <label for="height">Height (cm): </label>
                    <input type="text" name="height" id="height">
                </div>

                <div>
                    <label for="weight">Weight (kg): </label>
                    <input type="text" name="weight" id="weight">
                </div>

                <div id="result"></div>
                <input type="submit" value="Calculate">
            </form>
        </fieldset>
    </div>

    <script>
        const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Corrected: Fetch the values using the proper selectors
            let height = document.querySelector('#height').value;
            let weight = document.querySelector('#weight').value;

            // Convert height to meters and calculate BMI
            let BMI = (weight / ((height / 100) * (height / 100))).toFixed(2);

            let result = document.querySelector('#result');

            // Clear previous result
            result.innerHTML = '';

            // Append the new BMI result
            result.append(`Your BMI is: ${BMI}`);
        });
    </script>
</body>
</html>

```
## Project 02 solution: Digital Clock

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>

    <style>
                * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #212121;
            color: white;
            padding: 10px;
            font-family: Arial, sans-serif;
            overflow-x: auto;
        }

        h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
            padding: 10px;
            border: solid white 2px;
        }

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 250px;
        }

        span{
            padding: 10px;
            border: solid red 2px;
            border-radius: 20px;
            transition:  0.3s ease-in-out; /* Smooth transition */
        }

        span:hover {
    transform: scale(2); /* Scale up on hover */
}
    </style>
</head>
<body>

    <h1>✨ Watch Time Here ✨</h1>

    <div class="watch">
        <span></span>
    </div>
    
    <script>

        setInterval(function() {
            let date = new Date();
            document.querySelector('.watch span').innerHTML = date.toLocaleTimeString();
        }, 1000)
    </script>
</body>
</html>
```