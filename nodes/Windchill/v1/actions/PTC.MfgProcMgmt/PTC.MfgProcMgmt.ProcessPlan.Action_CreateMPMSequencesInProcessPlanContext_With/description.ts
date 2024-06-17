import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtProcessPlanActionCreateMpmSequencesInProcessPlanContextWithDescription: INodeProperties[] = [
	{
		displayName: 'ProcessPlanId',
		name: 'ProcessPlanId-string(path)',
		description: 'Process Plan ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMSequencesInProcessPlanContext",
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
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMSequencesInProcessPlanContext",
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
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMSequencesInProcessPlanContext",
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
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMSequencesInProcessPlanContext",
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
				displayName: '* SequencesToCreate',
				name: 'SequencesToCreate',
				description: 'Sequences To Create - array',
				type: 'json',
				default: '[\n\t{\n\t\t"ReturnLagDuplicate": [\n\t\t\t{\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t}\n\t\t],\n\t\t"Latest": true,\n\t\t"Category": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"CheckoutState": "string",\n\t\t"WorkInProgressState": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"View": "string",\n\t\t"ModifiedBy": "string",\n\t\t"Version": "string",\n\t\t"Name": "string",\n\t\t"Subtype": "string",\n\t\t"LastModified": "string",\n\t\t"CreatedBy": "string",\n\t\t"BranchingLag": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"CheckOutStatus": "string",\n\t\t"Revision": "string",\n\t\t"BranchingLagDuplicate": [\n\t\t\t{\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t}\n\t\t],\n\t\t"BranchingOperation": [\n\t\t\t"string"\n\t\t],\n\t\t"LifeCycleTemplateName": "string",\n\t\t"ObjectType": "string",\n\t\t"CreatedOn": "string",\n\t\t"ID": "string",\n\t\t"State": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"ReturnOperation": "string",\n\t\t"Number": "string",\n\t\t"Unit": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"ReturnLag": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"Description": "string",\n\t\t"Comments": "string",\n\t\t"VersionID": "string"\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMSequencesInProcessPlanContext",
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
		default: '{\n\t"SequencesToCreate": [\n\t\t{\n\t\t\t"ReturnLagDuplicate": [\n\t\t\t\t{\n\t\t\t\t\t"Precision": 0,\n\t\t\t\t\t"Unit": "string",\n\t\t\t\t\t"Value": 0,\n\t\t\t\t\t"Display": "string"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"Latest": true,\n\t\t\t"Category": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"CheckoutState": "string",\n\t\t\t"WorkInProgressState": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"View": "string",\n\t\t\t"ModifiedBy": "string",\n\t\t\t"Version": "string",\n\t\t\t"Name": "string",\n\t\t\t"Subtype": "string",\n\t\t\t"LastModified": "string",\n\t\t\t"CreatedBy": "string",\n\t\t\t"BranchingLag": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"CheckOutStatus": "string",\n\t\t\t"Revision": "string",\n\t\t\t"BranchingLagDuplicate": [\n\t\t\t\t{\n\t\t\t\t\t"Precision": 0,\n\t\t\t\t\t"Unit": "string",\n\t\t\t\t\t"Value": 0,\n\t\t\t\t\t"Display": "string"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"BranchingOperation": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"LifeCycleTemplateName": "string",\n\t\t\t"ObjectType": "string",\n\t\t\t"CreatedOn": "string",\n\t\t\t"ID": "string",\n\t\t\t"State": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"ReturnOperation": "string",\n\t\t\t"Number": "string",\n\t\t\t"Unit": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"ReturnLag": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"Description": "string",\n\t\t\t"Comments": "string",\n\t\t\t"VersionID": "string"\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMSequencesInProcessPlanContext",
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
