import { INodeProperties } from "n8n-workflow";

export const PtcFactoryStandardOperationActionUpdateSopRelatedLinksWithUpdateRequestsDescription: INodeProperties[] = [
	{
		displayName: 'StandardOperationId',
		name: 'StandardOperationId-string(path)',
		description: 'Standard Operation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"POST /StandardOperations('{StandardOperationId}')/PTC.Factory.updateSOPRelatedLinks",
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
					'PTC.Factory',
				],
				operation: [
					"POST /StandardOperations('{StandardOperationId}')/PTC.Factory.updateSOPRelatedLinks",
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
					'PTC.Factory',
				],
				operation: [
					"POST /StandardOperations('{StandardOperationId}')/PTC.Factory.updateSOPRelatedLinks",
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
					'PTC.Factory',
				],
				operation: [
					"POST /StandardOperations('{StandardOperationId}')/PTC.Factory.updateSOPRelatedLinks",
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
				displayName: '* TestRun',
				name: 'TestRun',
				description: 'Whether Test Run - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: '* UpdateRequests',
				name: 'UpdateRequests',
				description: 'Update Requests - array',
				type: 'json',
				default: '[\n\t{\n\t\t"TargetEntityID": "string",\n\t\t"RequestAction": "string",\n\t\t"ID": "string",\n\t\t"SourceEntityID": "string",\n\t\t"Type": "string",\n\t\t"Properties": [\n\t\t\t{\n\t\t\t\t"DoubleValue": 0,\n\t\t\t\t"ByteValue": null,\n\t\t\t\t"Value": "string",\n\t\t\t\t"SingleValue": null,\n\t\t\t\t"Int64Value": null,\n\t\t\t\t"Name": "string",\n\t\t\t\t"StringValue": "string",\n\t\t\t\t"Int32Value": null,\n\t\t\t\t"DecimalValue": null,\n\t\t\t\t"SByteValue": null,\n\t\t\t\t"BooleanValue": true,\n\t\t\t\t"Int16Value": null\n\t\t\t}\n\t\t]\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"POST /StandardOperations('{StandardOperationId}')/PTC.Factory.updateSOPRelatedLinks",
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
		default: '{\n\t"TestRun": true,\n\t"UpdateRequests": [\n\t\t{\n\t\t\t"TargetEntityID": "string",\n\t\t\t"RequestAction": "string",\n\t\t\t"ID": "string",\n\t\t\t"SourceEntityID": "string",\n\t\t\t"Type": "string",\n\t\t\t"Properties": [\n\t\t\t\t{\n\t\t\t\t\t"DoubleValue": 0,\n\t\t\t\t\t"ByteValue": null,\n\t\t\t\t\t"Value": "string",\n\t\t\t\t\t"SingleValue": null,\n\t\t\t\t\t"Int64Value": null,\n\t\t\t\t\t"Name": "string",\n\t\t\t\t\t"StringValue": "string",\n\t\t\t\t\t"Int32Value": null,\n\t\t\t\t\t"DecimalValue": null,\n\t\t\t\t\t"SByteValue": null,\n\t\t\t\t\t"BooleanValue": true,\n\t\t\t\t\t"Int16Value": null\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"POST /StandardOperations('{StandardOperationId}')/PTC.Factory.updateSOPRelatedLinks",
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
