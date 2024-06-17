import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtOperationActionAssociateWorkCenterWithDoCopyOverDefaultCostAndTimeDescription: INodeProperties[] = [
	{
		displayName: 'OperationId',
		name: 'OperationId-string(path)',
		description: 'Operation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.AssociateWorkCenter",
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.AssociateWorkCenter",
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.AssociateWorkCenter",
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
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.AssociateWorkCenter",
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
				displayName: '* doCopyOverDefaultCostAndTime',
				name: 'doCopyOverDefaultCostAndTime',
				description: 'Whether Do Copy Over Default Cost And Time - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'OperationToWorkCenterLink',
				name: 'OperationToWorkCenterLink',
				description: 'Operation To Work Center Link - object',
				type: 'json',
				default: '{\n\t"Description": "string",\n\t"Department": "string",\n\t"@odata.type": "string",\n\t"ReferencedBy@odata.bind": "string",\n\t"WorkCenter@odata.bind": "string"\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.AssociateWorkCenter",
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
		default: '{\n\t"OperationToWorkCenterLink": {\n\t\t"Description": "string",\n\t\t"Department": "string",\n\t\t"@odata.type": "string",\n\t\t"ReferencedBy@odata.bind": "string",\n\t\t"WorkCenter@odata.bind": "string"\n\t},\n\t"doCopyOverDefaultCostAndTime": true\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.AssociateWorkCenter",
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
