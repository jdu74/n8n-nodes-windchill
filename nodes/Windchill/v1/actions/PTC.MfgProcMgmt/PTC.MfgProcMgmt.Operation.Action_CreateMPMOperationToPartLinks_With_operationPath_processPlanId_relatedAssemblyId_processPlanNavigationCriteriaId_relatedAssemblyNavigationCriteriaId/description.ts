import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtOperationActionCreateMpmOperationToPartLinksWithOperationPathProcessPlanIdRelatedAssemblyIdProcessPlanNavigationCriteriaIdRelatedAssemblyNavigationCriteriaIdDescription: INodeProperties[] = [
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
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMOperationToPartLinks",
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
						displayName: '$filter',
						name: '$filter-string(query)',
						description: 'Filter - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$top',
						name: '$top-integer(query)',
						description: 'Top - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: '$skip',
						name: '$skip-integer(query)',
						description: 'Skip - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: '$count',
						name: '$count-boolean(query)',
						description: 'Whether Count - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: '$orderby',
						name: '$orderby-string(query)',
						description: 'Orderby - string (query)',
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
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMOperationToPartLinks",
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
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMOperationToPartLinks",
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
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMOperationToPartLinks",
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
				displayName: '* consumablePaths',
				name: 'consumablePaths',
				description: 'Consumable Paths - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Path": [\n\t\t\t"string"\n\t\t]\n\t}\n]',
			},
			{
				displayName: 'operationPath',
				name: 'operationPath',
				description: 'Operation Path - object',
				type: 'json',
				default: '{\n\t"Path": [\n\t\t"string"\n\t]\n}',
			},
			{
				displayName: '* processPlanId',
				name: 'processPlanId',
				description: 'Process Plan ID - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* processPlanNavigationCriteriaId',
				name: 'processPlanNavigationCriteriaId',
				description: 'Process Plan Navigation Criteria ID - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* relatedAssemblyId',
				name: 'relatedAssemblyId',
				description: 'Related Assembly ID - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* relatedAssemblyNavigationCriteriaId',
				name: 'relatedAssemblyNavigationCriteriaId',
				description: 'Related Assembly Navigation Criteria ID - string',
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
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMOperationToPartLinks",
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
		default: '{\n\t"processPlanId": "string",\n\t"operationPath": {\n\t\t"Path": [\n\t\t\t"string"\n\t\t]\n\t},\n\t"relatedAssemblyNavigationCriteriaId": "string",\n\t"relatedAssemblyId": "string",\n\t"processPlanNavigationCriteriaId": "string",\n\t"consumablePaths": [\n\t\t{\n\t\t\t"Path": [\n\t\t\t\t"string"\n\t\t\t]\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMOperationToPartLinks",
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
