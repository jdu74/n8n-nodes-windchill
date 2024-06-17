import { INodeProperties } from "n8n-workflow";

export const ChangeableResultingByLinksUpdateResultingLinkItemDescription: INodeProperties[] = [
	{
		displayName: 'ChangeableId',
		name: 'ChangeableId-string(path)',
		description: 'Changeable ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /Changeables('{ChangeableId}')/ResultingByLinks('{ResultingLinkItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ResultingLinkItemId',
		name: 'ResultingLinkItemId-string(path)',
		description: 'Resulting Link Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /Changeables('{ChangeableId}')/ResultingByLinks('{ResultingLinkItemId}')",
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
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /Changeables('{ChangeableId}')/ResultingByLinks('{ResultingLinkItemId}')",
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
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /Changeables('{ChangeableId}')/ResultingByLinks('{ResultingLinkItemId}')",
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
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ImpactIntent',
				name: 'ImpactIntent',
				description: 'Impact Intent - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'TargetTransition',
				name: 'TargetTransition',
				description: 'Target Transition - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /Changeables('{ChangeableId}')/ResultingByLinks('{ResultingLinkItemId}')",
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
		default: '{\n\t"TargetTransition": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Description": "string",\n\t"ImpactIntent": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t}\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /Changeables('{ChangeableId}')/ResultingByLinks('{ResultingLinkItemId}')",
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
