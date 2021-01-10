#!/usr/bin/env npx ts-node

import {testSrestLibrary} from "zrest-tester";
import {provision} from "./provision";
import {URL} from "url";
import {resolve} from "path";

const task =testSrestLibrary(new URL(provision.liburl), provision.srests, resolve(__dirname, "answers"), resolve(__dirname, "debugs"));

task().then(xx => {
    console.log(xx);
})
