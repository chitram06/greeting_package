import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";

export default{
    input: "src/index.ts",
    output:[
        {
            file: "lib/index.cjs",
            format: "cjs"
        },
        {
            file: "lib/index.esm.js",
            format: "esm"
        }
    ],
    plugins: [
        del({targets: ["lib/*"]}), //every time a build happens, it deletes the previous version and creates a version based on the current chagnes to the code. like any files got deleted in the code, that files will not get into the lib folder.
        typescript({ useTsconfigDeclarationDir: true})
    ]
}