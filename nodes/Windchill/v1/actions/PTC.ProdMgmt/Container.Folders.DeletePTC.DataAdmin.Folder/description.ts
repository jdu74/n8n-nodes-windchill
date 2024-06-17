import { INodeProperties } from "n8n-workflow";

export const ContainerFoldersDeletePtcDataAdminFolderDescription: INodeProperties[] = [
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"DELETE /Parts('{PartId}')/Context/Folders('{FolderId}')",
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
					'PTC.ProdMgmt',
				],
				operation: [
					"DELETE /Parts('{PartId}')/Context/Folders('{FolderId}')",
				],
			},
		},
		required: true,
	},
];
