#!/bin/bash

# Module 1: Introduction to Software Engineering
mkdir "Module 1 - Introduction to Software Engineering"
cd "Module 1 - Introduction to Software Engineering"

# Lessons for Module 1
declare -a lessonsModule1=("Lesson-1-Setup-Dev" "Lesson-2-Git & Github" "Lesson-3-JavaScript Basics" "Lesson-4-HTML-CSS-Basics" "Lesson-5-DOM-Manipulation")
for lesson in "${lessonsModule1[@]}"
do
    mkdir "$lesson"
    cd "$lesson"
    mkdir notes assignments practice
    cd ..
done
cd ..

# Module 2: Advanced Javascript
mkdir "Module 2 - Advanced Javascript"
cd "Module 2 - Advanced Javascript"

# Lessons for Module 2
declare -a lessonsModule2=("Lesson-1-Advanced JavaScript" "Lesson-2-Canvas")
for lesson in "${lessonsModule2[@]}"
do
    mkdir "$lesson"
    cd "$lesson"
    mkdir notes assignments practice
    cd ..
done
cd ..

# Module 3: Learning React Javascript Framework
mkdir "Module 3 - Learning React Javascript Framework"
cd "Module 3 - Learning React Javascript Framework"

# Lessons for Module 3
declare -a lessonsModule3=("Lesson-1-React" "Lesson-2-Web-API")
for lesson in "${lessonsModule3[@]}"
do
    mkdir "$lesson"
    cd "$lesson"
    mkdir notes assignments practice
    cd ..
done
cd ..

# Module 4: Fullstack Applications
mkdir "Module 4 - Fullstack Applications"
cd "Module 4 - Fullstack Applications"

# Lessons for Module 4
declare -a lessonsModule4=("Lesson-1-Postgres" "Lesson-2-Servers" "Lesson-3-Hosting")
for lesson in "${lessonsModule4[@]}"
do
    mkdir "$lesson"
    cd "$lesson"
    mkdir notes assignments practice
    cd ..
done
cd ..
