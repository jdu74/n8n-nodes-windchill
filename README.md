# n8n-nodes-windchill

<p align="center">
	<a href="https://n8n.io/"><img src="https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" height="50" style="margin:10px"/></a>
	<a href="https://www.ptc.com"><img src="https://ptc-p-001.sitecorecontenthub.cloud/api/public/content/c22e1d0a2ced49ccacb3fae025b2eb00?v=18d6e6d8" height="50" style="margin:10px"/></a>
</p>

<p align="center">
  This package provides nodes for n8n to work with windchill<br />
  by <a href="https://github.com/jdu74">Jean Durieux</a>
</p>

This package provides nodes for [`n8n`](https://github.com/n8n-io/n8n) to work with [windchill](https://cad.windchill.com).

## Installation

### In a local NPM installation

```bash
npm i n8n-nodes-windchill
```

The nodes should be automatically discovered by `n8n`.

### In a global installation

```bash
npm i -g n8n-nodes-windchill
```

You should then set the `N8N_CUSTOM_EXTENSIONS` variable to the path of the modules, e.g. on Ubuntu:

```bash
export N8N_CUSTOM_EXTENSIONS="/usr/local/lib/node_modules/n8n-nodes-windchill"
```

### In a Docker image

You'll have to spin your own `Dockerfile` that builds from the official `n8n` image:

```Dockerfile
FROM n8nio/n8n

USER root

RUN npm_config_user=root npm install -g n8n-nodes-windchill

ENV N8N_CUSTOM_EXTENSIONS "/usr/local/lib/node_modules/n8n-nodes-windchill"

```

## Usage

### Credentials


### Windchill Webhook Notifications

This node will listen to message on a topic's subscription and trigger whenever a new message is coming.

#### Parameters



