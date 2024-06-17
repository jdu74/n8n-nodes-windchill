import { INodeProperties } from "n8n-workflow";

export const PostProcessMaterialDescription: INodeProperties[] = [
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					'POST /ProcessMaterials',
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					'POST /ProcessMaterials',
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
				displayName: 'Category',
				name: 'Category',
				description: 'Category - object',
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
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'DimensionX',
				name: 'DimensionX',
				description: 'Dimension X - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'DimensionY',
				name: 'DimensionY',
				description: 'Dimension Y - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'DimensionZ',
				name: 'DimensionZ',
				description: 'Dimension Z - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Folder@odata.bind',
				name: 'Folder@odata.bind',
				description: 'Folder Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'MPMCompatibilityLinks@odata.bind',
				name: 'MPMCompatibilityLinks@odata.bind',
				description: 'Mpm Compatibility Links Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Name',
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
				displayName: 'References@odata.bind',
				name: 'References@odata.bind',
				description: 'References Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'ResultedByObjects@odata.bind',
				name: 'ResultedByObjects@odata.bind',
				description: 'Resulted By Objects Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Source',
				name: 'Source',
				description: 'Source - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Usage',
				name: 'Usage',
				description: 'Usage - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					'POST /ProcessMaterials',
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
		default: '{\n\t"DimensionZ": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"DimensionY": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"DimensionX": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"View": "string",\n\t"Name": "string",\n\t"Source": "string",\n\t"DefaultUnit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Usage": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Number": "string",\n\t"Description": "string",\n\t"@odata.type": "string",\n\t"Context@odata.bind": "string",\n\t"Folder@odata.bind": "string",\n\t"ResultedByObjects@odata.bind": [\n\t\t"string"\n\t],\n\t"DescribedBy@odata.bind": [\n\t\t"string"\n\t],\n\t"References@odata.bind": [\n\t\t"string"\n\t],\n\t"Uses@odata.bind": [\n\t\t"string"\n\t],\n\t"MPMCompatibilityLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"PartDocAssociations@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					'POST /ProcessMaterials',
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
