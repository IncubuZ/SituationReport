<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->

# org.apache.cordova.splashscreen

Ten plugin wyświetla i ukrywa ekran powitalny podczas uruchamiania aplikacji.

<<<<<<< HEAD
## Instalacja
=======
## Instalacji
>>>>>>> origin/master

    cordova plugin add org.apache.cordova.splashscreen
    

## Obsługiwane platformy

<<<<<<< HEAD
*   Amazon Fire OS
*   Android
*   BlackBerry 10
=======
*   Amazon ogień OS
*   Android
*   Jeżyna 10
>>>>>>> origin/master
*   iOS
*   Windows Phone 7 i 8
*   Windows 8

## Metody

*   splashscreen.show
*   splashscreen.Hide

<<<<<<< HEAD
### Dziwactwa Androida
=======
### Android dziwactwa
>>>>>>> origin/master

W pliku config.xml musisz dodać następujące preferencje:

`<preference name="SplashScreen" value="foo" />` `<preference name="SplashScreenDelay" value="10000" />`

Gdzie foo jest nazwą pliku ekranu powitalnego, najlepiej 9 łatce. Upewnij się dodać pliki splashcreen do katalogu res/xml w odpowiednich folderach. Drugi parametr reprezentuje, jak długo ekranu powitalnego pojawi się w milisekundach. Domyślnie 3000 ms. Aby uzyskać więcej informacji, zobacz [ikony i ekrany powitalne w aplikacjach][1] .

 [1]: http://cordova.apache.org/docs/en/edge/config_ref_images.md.html

## splashscreen.Hide

Odrzucić ten opryskaæ têcza.

<<<<<<< HEAD
    Navigator.splashscreen.Hide();
=======
    navigator.splashscreen.hide();
>>>>>>> origin/master
    

### Jeżyna 10, WP8, iOS dziwactwo

`config.xml`Pliku `AutoHideSplashScreen` ustawienie musi być `false` . Opóźnienia, ukrywanie ekranu powitalnego przez dwie sekundy, dodać timer następujących w `deviceready` obsługa zdarzeń:

<<<<<<< HEAD
        setTimeout(function() {navigator.splashscreen.hide();
=======
        setTimeout(function() {
            navigator.splashscreen.hide();
>>>>>>> origin/master
        }, 2000);
    

## splashscreen.show

Wyświetla ekran powitalny.

<<<<<<< HEAD
    Navigator.splashscreen.show();
=======
    navigator.splashscreen.show();
>>>>>>> origin/master
    

Aplikacja nie może wywołać `navigator.splashscreen.show()` aż aplikacja została uruchomiona i `deviceready` imprezy został zwolniony. Ale ponieważ zazwyczaj opryskać tęcza ma być widoczne przed rozpoczęciem aplikacji, wydaje się sprzeczne z celem ekranu powitalnego. Dostarczanie niektórych konfiguracji w `config.xml` będzie automatycznie `show` ekran powitalny, natychmiast po uruchomienie aplikacji i przed pełni rozpoczął i otrzymał `deviceready` zdarzenie. Aby uzyskać więcej informacji na robienie tej konfiguracji, zobacz [ikony i ekrany powitalne w aplikacjach][1] . Z tego powodu, jest mało prawdopodobne, należy zadzwonić `navigator.splashscreen.show()` Aby wyświetlić ekran powitalny dla uruchamiania aplikacji.