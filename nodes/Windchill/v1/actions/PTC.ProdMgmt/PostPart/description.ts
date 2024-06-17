import { INodeProperties } from "n8n-workflow";

export const PostPartDescription: INodeProperties[] = [
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /Parts',
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /Parts',
				],
				jsonContentType: [
					'application/json',
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'AssemblyMode',
				name: 'AssemblyMode',
				description: 'Assembly Mode - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Attachments@odata.bind',
				name: 'Attachments@odata.bind',
				description: 'Attachments Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'ConfigurableModule',
				name: 'ConfigurableModule',
				description: 'Configurable Module - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: '* Context@odata.bind',
				name: 'Context@odata.bind',
				description: 'Context Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* DefaultTraceCode',
				name: 'DefaultTraceCode',
				description: 'Default Trace Code - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: '* DefaultUnit',
				name: 'DefaultUnit',
				description: 'Default Unit - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'DescribedBy@odata.bind',
				name: 'DescribedBy@odata.bind',
				description: 'Described By Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: '* EndItem',
				name: 'EndItem',
				description: 'Whether End Item - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Folder@odata.bind',
				name: 'Folder@odata.bind',
				description: 'Folder Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* GatheringPart',
				name: 'GatheringPart',
				description: 'Whether Gathering Part - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: '* Name',
				name: 'Name',
				description: 'Name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Number',
				name: 'Number',
				description: 'Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'PartDocAssociations@odata.bind',
				name: 'PartDocAssociations@odata.bind',
				description: 'Part Doc Associations Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: '* PhantomManufacturingPart',
				name: 'PhantomManufacturingPart',
				description: 'Whether Phantom Manufacturing Part - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'References@odata.bind',
				name: 'References@odata.bind',
				description: 'References Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'SmallThumbnails@odata.bind',
				name: 'SmallThumbnails@odata.bind',
				description: 'Small Thumbnails Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Source',
				name: 'Source',
				description: 'Source - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Thumbnails@odata.bind',
				name: 'Thumbnails@odata.bind',
				description: 'Thumbnails Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Uses@odata.bind',
				name: 'Uses@odata.bind',
				description: 'Uses Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'View',
				name: 'View',
				description: 'View - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /Parts',
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					false,
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"View": "string",\n\t"Source": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"DefaultUnit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"EndItem": true,\n\t"DefaultTraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"GatheringPart": true,\n\t"Number": "string",\n\t"PhantomManufacturingPart": true,\n\t"Name": "string",\n\t"AssemblyMode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"ConfigurableModule": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"@odata.type": "string",\n\t"Uses@odata.bind": [\n\t\t"string"\n\t],\n\t"DescribedBy@odata.bind": [\n\t\t"string"\n\t],\n\t"References@odata.bind": [\n\t\t"string"\n\t],\n\t"PartDocAssociations@odata.bind": [\n\t\t"string"\n\t],\n\t"Context@odata.bind": "string",\n\t"SmallThumbnails@odata.bind": [\n\t\t"string"\n\t],\n\t"Thumbnails@odata.bind": [\n\t\t"string"\n\t],\n\t"Folder@odata.bind": "string",\n\t"Attachments@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /Parts',
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					true,
				],
			},
		},
	},
];
