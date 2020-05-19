# Typescript discriminator



Very often we have use-cases where we would like to use a single type `Union Type` but still be sure about the properties inside them. 

https://gist.github.com/195b93cc6fef7206ca1c0f1bbac02cd7

But under the hood Typescript union's are more of "common" properties inside them instead of "having all the properties".

So when you try and use it like: 

https://gist.github.com/f772434b23f5de3861f44ae54c1c2715

where as you would expect person to have `{name, salary}` or `{name, power}` and choose between them depending on what person is.

This is where discriminators come in power-play. Bear with my variable nomenclature: 

Lets define an enum to contain both the use-cases of Person's we have, calling it `PersonType` and then define a type combining `HumanResource` and `Employee`. 

https://gist.github.com/640a5c5220620ec7c4c8481d6d6803ac
