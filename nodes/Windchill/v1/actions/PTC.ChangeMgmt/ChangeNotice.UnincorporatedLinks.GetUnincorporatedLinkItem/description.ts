import { INodeProperties } from "n8n-workflow";

export const ChangeNoticeUnincorporatedLinksGetUnincorporatedLinkItemDescription: INodeProperties[] = [
	{
		displayName: 'ChangeNoticeId',
		name: 'ChangeNoticeId-string(path)',
		description: 'Change Notice ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ChangeNotices('{ChangeNoticeId}')/UnincorporatedLinks('{UnincorporatedLinkItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'UnincorporatedLinkItemId',
		name: 'UnincorporatedLinkItemId-string(path)',
		description: 'Unincorporated Link Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ChangeNotices('{ChangeNoticeId}')/UnincorporatedLinks('{UnincorporatedLinkItemId}')",
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
					"GET /ChangeNotices('{ChangeNoticeId}')/UnincorporatedLinks('{UnincorporatedLinkItemId}')",
				],
			},
		},
	},
];
