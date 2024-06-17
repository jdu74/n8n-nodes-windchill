import { INodeProperties } from "n8n-workflow";

export const StandardOperationSopsccLinksUpdateSopToSccLinkDescription: INodeProperties[] = [
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
					"PATCH /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'SOPToSCCLinkId',
		name: 'SOPToSCCLinkId-string(path)',
		description: 'Sop To Scc Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"PATCH /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
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
					'PTC.Factory',
				],
				operation: [
					"PATCH /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
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
					"PATCH /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
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
				displayName: 'GraphicData',
				name: 'GraphicData',
				description: 'Graphic Data - object',
				type: 'json',
				default: '{\n\t"GraphicDataAttributes": "string",\n\t"ModelItemType": "string",\n\t"ModelItemName": "string",\n\t"ModelItemDescription": "string",\n\t"ModelItemSubType": "string",\n\t"GraphicType": "string"\n}',
			},
			{
				displayName: 'ModelItemContainerMasterReference',
				name: 'ModelItemContainerMasterReference',
				description: 'Model Item Container Master Reference - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ModelItemMasterReference',
				name: 'ModelItemMasterReference',
				description: 'Model Item Master Reference - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"PATCH /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
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
		default: '{\n\t"ModelItemContainerMasterReference": "string",\n\t"ModelItemMasterReference": "string",\n\t"GraphicData": {\n\t\t"GraphicDataAttributes": "string",\n\t\t"ModelItemType": "string",\n\t\t"ModelItemName": "string",\n\t\t"ModelItemDescription": "string",\n\t\t"ModelItemSubType": "string",\n\t\t"GraphicType": "string"\n\t}\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"PATCH /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
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
