import { parse } from  "https://deno.land/std@0.61.0/flags/mod.ts";

const args = parse(Deno.args);

if (args.city === undefined) {
    console.error("No city supplied");
    Deno.exit();
}

const apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${args.city}&units=metric&appid=${apiKey}`);
const data = await res.json();

console.log(data);