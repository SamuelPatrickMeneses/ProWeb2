#!/bin/bash
rm -rf /var/www/html/ProWeb2
cp -r . /var/www/html/ProWeb2
/etc/init.d/apache2 reload