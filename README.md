# Random color generator with NODE.js

<p>

This little app generates colored boxes with a couple of options: <br/><br/>

<img src="https://github.com/uebriges/randomcolorgenerator/blob/main/Standardbox_with_random_color.PNG"> <br/><br/>

1. Standard box with random color
2. Standard box with defined color
3. Standard box with defined color by 'ask' argument
4. Custom sized box with random color <br/><br/>
</p>
<p>

## Standard box with random color

By executing the following command line:

`node index.js`

a randomly colored box with a size of 9 lines and 31 characters is printed, which contains the randomly generated color value in hex.

Example:<br/><br/>

<img src="https://github.com/uebriges/randomcolorgenerator/blob/main/Standardbox_with_random_color.PNG"> <br/><br/>

</p>

<p>

## Standard box with defined color

By executing the following example command line:

`node index.js red`

or

`node index.js red light`

a red or light red colored box with a size of 9 lines and 31 characters is printed. 'red' stays for the hue value and 'light' for the luminosity value. You can chose to ignore the luminosity value:<br/><br/>

<img src="https://github.com/uebriges/randomcolorgenerator/blob/main/Standardbox_red_light.PNG"><br/><br/>

> NOTE: It is not always the same exact color, but only a color in a specific range of hue and luminosity.
> <br/><br/>

</p>
<p>

## Standard box with defined color by 'ask' argument

The output is the same as in chapter 3, but the user has first to enter the keyword ask like below:

`node index.js ask`

Now the system asks for a color and luminosity value one after the other, like in the example below: <br/><br/>

<img src="https://github.com/uebriges/randomcolorgenerator/blob/main/Standardbox_ask.PNG"><br/><br/>

> NOTE: If you don't enter any value for color or luminosity or both, a random color is generated instead.
> <br/><br/>

</p>

## Custom sized box with random color

By executing the following example command line:

`node index.js 15x48`

the following custom sized box (Lines: 15, Characters: 48) with a random color is generated:<br/><br/>

<img src="https://github.com/uebriges/randomcolorgenerator/blob/main/Custom_sized_box.PNG"><br/><br/>

> NOTE: The range of size is between 9x31 and 99x99. If you enter values below, you will get "Minimum: 9x31" as output and no box is generated. If you exceed the limit a box of standard size is generated.
