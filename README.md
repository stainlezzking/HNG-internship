


<div align="center">
    <img src="./assets/hng.jpg" alt="Logo" width="70">
  <h3 align="center">HNG INTERNSHIP</h3>

  <p align="center">
    Guide about this project 👇
    <br />
    <br />
    ·
    <a href="https://twitter.com/stilkinging">Twitter</a>
    ·
    <a href="https://www.linkedin.com/in/stainlezzkin">linkedin</a>
</div>

<br />

# The Task
convert all rows in the csv file to CHA-700 json format and 
find the sha256 hash of each row and append them on a different column (named hash) in the main csv file, next to its respective rows. Then export the file to filename.output.csv

## Two ways to use 
* using the default file in the csv folder ( the csv file provided in the HSG google doc)
* using your own local file

<br />

> Note to use this package you need to have node install, to use it's package manager

<br />

###  Steps to use this package
1.  clone this repository
```
$ git clone https://github.com/stainlezzking/HNG-internship.git
```
2. checkout this  branch
```
$ git checkout csv2json 
```
3. open the root file location on your command line (the location with the package.json file)

4. run npm install to install all dependencies

```
$ npm install
```

<p align="center"> to use the default csv file</p>

*  run this code in the terminal to test the package using the default provided CSV file 👇
```
 npm run convert
```
<br />

<p align="center"> to use your own local csv file</p>


* copy your local file into the csv folder and run this command to use this package on your file 👇

```
 npm run convert <filename>
```
> ps replace <filename\> with your csv file and add the extension.  
example
```
 npm run convert example.csv
```

<br />
<br />
<p align="center">
Hurray!!! you're done 
</p>

<br />
<br />
