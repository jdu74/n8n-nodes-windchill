import { INodeProperties } from "n8n-workflow";

export const ContainerFoldersDeletePtcDataAdminFolderDescription: INodeProperties[] = [
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
					"DELETE /Containers('{ContainerId}')/Folders('{FolderId}')",
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
					"DELETE /Containers('{ContainerId}')/Folders('{FolderId}')",
				],
			},
		},
		required: true,
	},
];
