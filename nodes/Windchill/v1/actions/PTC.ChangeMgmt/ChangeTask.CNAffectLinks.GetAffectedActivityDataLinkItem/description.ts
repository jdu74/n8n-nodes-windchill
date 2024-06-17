import { INodeProperties } from "n8n-workflow";

export const ChangeTaskCnAffectLinksGetAffectedActivityDataLinkItemDescription: INodeProperties[] = [
	{
		displayName: 'ChangeTaskId',
		name: 'ChangeTaskId-string(path)',
		description: 'Change Task ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AffectedActivityDataLinkItemId',
		name: 'AffectedActivityDataLinkItemId-string(path)',
		description: 'Affected Activity Data Link Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
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
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				],
			},
		},
	},
];
