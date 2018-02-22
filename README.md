
## <a name="summary"></a> SPINE Web Components

SPINE Components. A generator for installing SPINE web components and hosting them in a decentralized database. SPINE is an acronym for Storj Polymer IPFS Node Express.

`spinec` is a cli tool for quickly adding and creating webcomponents. For adding prebuilt components quickly, it uses the [related github polymer_web_components](https://github.com/musicsmithnz/polymer_web_components) which is a library still in development that contains ready-made components based on typical implementations from the styling frameworks or component libraries [listed below](#libraries). The cli is usable without reference to these libraries, as you have the option to download components peer-to-peer using [IPFS](https://ipfs.io), as well as create your own elements without using these pre-built components at all. The cli tool is a useful way to install components quickly, rapidly speeding development, but it is also designed to be used with IPFS peers. Thus, if a significant number of people use this project, your website resources should load faster as each element will essentially be torrented separately by your peers hosting their own websites with these components.

It is a new project but I anticipate it being able to save people a lot of time in the future. It is made with Polymer3, using the new standard for importing components with ES modules. I plan to make a easy to use cli tool allowing easy import of web components from the component libraries and styling frameworks. For the styling frameworks, I will need to create the components first based on common paradigms and code snippets from official tutorials and examples. 

## <a name="polymer_web_components"></a> Polymer Web Components

A submodule of SPINE Web Components that provides the Polymer and HTML Templates for importing into the SPINE Web Components Repository.
