import { INodeProperties } from "n8n-workflow";

export const ContainerFoldersGetFolderDescription: INodeProperties[] = [
	{
		displayName: 'ContainerId',
		name: 'ContainerId-string(path)',
		description: 'Container ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DataAdmin',
				],
				operation: [
					"GET /Containers('{ContainerId}')/Folders('{FolderId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'FolderId',
		name: 'FolderId-string(path)',
		description: 'Folder ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DataAdmin',
				],
				operation: [
					"GET /Containers('{ContainerId}')/Folders('{FolderId}')",
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
					'PTC.DataAdmin',
				],
				operation: [
					"GET /Containers('{ContainerId}')/Folders('{FolderId}')",
				],
			},
		},
	},
];
