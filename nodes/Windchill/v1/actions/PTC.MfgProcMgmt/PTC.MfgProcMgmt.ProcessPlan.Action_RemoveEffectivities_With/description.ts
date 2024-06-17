import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtProcessPlanActionRemoveEffectivitiesWithDescription: INodeProperties[] = [
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
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.RemoveEffectivities",
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.RemoveEffectivities",
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
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.RemoveEffectivities",
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
				displayName: '* Effectivities',
				name: 'Effectivities',
				description: 'Effectivities - array',
				type: 'json',
				default: '[\n\t{\n\t\t"CreatedOn": "string",\n\t\t"ID": "string",\n\t\t"LastModified": "string",\n\t\t"EffectivityQualifier": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t}\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.RemoveEffectivities",
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
		default: '{\n\t"Effectivities": [\n\t\t{\n\t\t\t"CreatedOn": "string",\n\t\t\t"ID": "string",\n\t\t\t"LastModified": "string",\n\t\t\t"EffectivityQualifier": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t}\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.RemoveEffectivities",
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
