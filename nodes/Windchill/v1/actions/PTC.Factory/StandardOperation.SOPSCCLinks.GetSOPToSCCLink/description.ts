import { INodeProperties } from "n8n-workflow";

export const StandardOperationSopsccLinksGetSopToSccLinkDescription: INodeProperties[] = [
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
					"GET /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
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
					"GET /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
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
					"GET /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
				],
			},
		},
	},
];
