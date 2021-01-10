#!/usr/bin/env npx ts-node

import {benchmarkSrestLoading} from "zrest-benchmarker";
import {URL} from "url";
import {provision} from "./provision";


benchmarkSrestLoading(new URL(provision.liburl), provision.srests)().then(xxx => {
    console.log(xxx);
})
