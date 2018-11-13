#!/usr/bin/env bash

tar -cf histordom.tar build/
#scp build.tar f4itonk5@f4itonk5.beget.tech:/home/f/f4itonk5/sts/public_html/
scp histordom.tar stas@sarinform.ru:/home/stas/
