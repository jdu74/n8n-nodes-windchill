import { INodeProperties } from "n8n-workflow";

export const OperationHolderOperationHolderUsageLinkGetOperationHolderUsageLinkDescription: INodeProperties[] = [
	{
		displayName: 'OperationHolderId',
		name: 'OperationHolderId-string(path)',
		description: 'Operation Holder ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /OperationHolders('{OperationHolderId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'OperationHolderUsageLinkId',
		name: 'OperationHolderUsageLinkId-string(path)',
		description: 'Operation Holder Usage Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /OperationHolders('{OperationHolderId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
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
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /OperationHolders('{OperationHolderId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				],
			},
		},
	},
];
