---
title: "Draft pull requests"
date: "2020-04-10"
type: "blog"
---

# Typescript discriminator

Very often we have use-cases where we would like to use a single type `Union Type` but still be sure about the properties inside them.

```{javascript}
interface Employee {
  name: string;
	salary: number;
}

interface HumanResource {
  name: string;
  power: boolean;
}

let person: Employee | HumanResource;
```

But under the hood Typescript union's are more of "common" properties inside them instead of "having all the properties".

So when you try and use it like:

```{javascript}
let helloPerson = (person: Employee | HumanResource): void => {
   console.log(person.<only has properties common to Employee & HumanResource aka name>);
}
```

where as you would expect person to have `{name, salary}` or `{name, power}` and choose between them depending on what person is.

This is where discriminators come in power-play. Bear with my variable nomenclature:

Lets define an enum to contain both the use-cases of Person's we have, calling it `PersonType` and then define a type combining `HumanResource` and `Employee`.

```{javascript}
enum PersonType { "EMPLOYEE" , "HR" }

interface Employee {
  name: string;
  type: PersonType.EMPLOYEE
	salary: number;
}

interface HumanResource {
  name: string;
  type: PersonType.HR
  power: boolean;
}

type Person = HumanResource | Employee;

let person: Employee | HumanResource;

let helloPerson = (person: Person): void => {
  switch(person.type) {
    case PersonType.EMPLOYEE:
      // this gives you both name/salary since now TS understands
      // and discriminates between the two types you have
      console.log(person.{gives you name, salary});
  }
}
```
