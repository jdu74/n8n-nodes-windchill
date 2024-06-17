import { INodeProperties } from "n8n-workflow";

export const PartUseOccurrencesPostUsageOccurrenceDescription: INodeProperties[] = [
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
					"POST /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"POST /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences",
				],
			},
		},
		required: true,
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
					"POST /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences",
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
					"POST /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences",
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
				displayName: 'BuildStatus',
				name: 'BuildStatus',
				description: 'Build Status - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'ComponentID',
				name: 'ComponentID',
				description: 'Component ID - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Location',
				name: 'Location',
				description: 'Location - object',
				type: 'json',
				default: '{\n\t"AngleUnit": "string",\n\t"AngleY": 0,\n\t"PointX": 0,\n\t"AngleX": 0,\n\t"PointZ": 0,\n\t"PointUnit": "string",\n\t"AngleZ": 0,\n\t"PointY": 0\n}',
			},
			{
				displayName: 'ReferenceDesignator',
				name: 'ReferenceDesignator',
				description: 'Reference Designator - string',
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
					"POST /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences",
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
		default: '{\n\t"Location": {\n\t\t"AngleUnit": "string",\n\t\t"AngleY": 0,\n\t\t"PointX": 0,\n\t\t"AngleX": 0,\n\t\t"PointZ": 0,\n\t\t"PointUnit": "string",\n\t\t"AngleZ": 0,\n\t\t"PointY": 0\n\t},\n\t"ComponentID": 0,\n\t"BuildStatus": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"ReferenceDesignator": "string",\n\t"@odata.type": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"POST /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences",
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
