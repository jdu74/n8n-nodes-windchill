import { INodeProperties } from "n8n-workflow";

export const PtcProdMgmtPartActionUpdateCommonPropertiesWithDescription: INodeProperties[] = [
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"POST /Parts('{PartId}')/PTC.ProdMgmt.UpdateCommonProperties",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"POST /Parts('{PartId}')/PTC.ProdMgmt.UpdateCommonProperties",
				],
			},
		},
	},
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
					"POST /Parts('{PartId}')/PTC.ProdMgmt.UpdateCommonProperties",
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
					"POST /Parts('{PartId}')/PTC.ProdMgmt.UpdateCommonProperties",
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
				displayName: '* Updates',
				name: 'Updates',
				description: 'Updates - object',
				type: 'json',
				default: '{\n\t"DefaultUnit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"EndItem": true,\n\t"DefaultTraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"GatheringPart": true,\n\t"Number": "string",\n\t"PhantomManufacturingPart": true,\n\t"Name": "string",\n\t"ConfigurableModule": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t}\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"POST /Parts('{PartId}')/PTC.ProdMgmt.UpdateCommonProperties",
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
		default: '{\n\t"Updates": {\n\t\t"DefaultUnit": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"EndItem": true,\n\t\t"DefaultTraceCode": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"GatheringPart": true,\n\t\t"Number": "string",\n\t\t"PhantomManufacturingPart": true,\n\t\t"Name": "string",\n\t\t"ConfigurableModule": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t}\n\t}\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"POST /Parts('{PartId}')/PTC.ProdMgmt.UpdateCommonProperties",
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
