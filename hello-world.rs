// Hello, Name or World!
/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
  */

fn hello(name: &str) -> String {
    if name.is_empty() {
        return String::from("Hello, World!");
    }

    let formatted_name = name[..1].to_uppercase() + &name[1..].to_lowercase();
    format!("Hello, {}!", formatted_name)
}